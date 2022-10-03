package kr.co.thirtytwodevs.cssselectortrainer.questions.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "questions")
@Getter
@Setter
public class Questions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 기본키 생성을 데이터베이스에 위임해주고 id가 null이면 알아서 auto_increment 해줌
    private Long id;
    private String contents;
    private boolean deleted;
    private int step;

    // 이대로 진행시 java.sql.SQLException: Unknown column 'questions0_.created_at' in 'field list' 오류발생
    // createdAt ColName 중간에 대문자가 있으면 _소문자로 기본변환 https://hayeon17kim.github.io/posts/hiwork-07/
    // Column 어노테이션 name 속성 모두 소문자로 처리
    //@Column(name = "createdat")
    //@Column(name = "updatedat")
    //2022.08.28 db 컬럼과 entity 변수의 대소문자 동일화 설정
    //spring.jpa.hibernate.naming.physical-strategy = org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl
    @Column(name = "createdAt", insertable = false, updatable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date createdAt;
    @Column(name = "updatedAt", insertable = false, updatable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
    private Date updatedAt;
    private String solution;
    private String title;
    private String html;

}
