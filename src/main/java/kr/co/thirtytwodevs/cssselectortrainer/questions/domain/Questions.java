package kr.co.thirtytwodevs.cssselectortrainer.questions.domain;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "questions")
public class Questions {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String contents;
    private boolean deleted;
    private int step;

    // 이대로 진행시 java.sql.SQLException: Unknown column 'questions0_.created_at' in 'field list' 오류발생
    // createdAt ColName 중간에 대문자가 있으면 _소문자로 기본변환 https://hayeon17kim.github.io/posts/hiwork-07/
    // Column 어노테이션 name 속성 모두 소문자로 처리
    @Column(name = "createdat")
    private Date createdAt;
    @Column(name = "updatedat")
    private Date updatedAt;
    private String solution;
    private String title;


    /*@Override
    public String toString() {
        return "Questions{" +
                "id=" + id +
                ", contents='" + contents + '\'' +
                ", deleted=" + deleted +
                ", step=" + step +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                ", solution='" + solution + '\'' +
                ", title='" + title + '\'' +
                '}';
    }*/
}
