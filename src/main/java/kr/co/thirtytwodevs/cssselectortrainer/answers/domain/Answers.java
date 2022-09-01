package kr.co.thirtytwodevs.cssselectortrainer.answers.domain;

import javax.persistence.Entity;
import javax.persistence.*;
import java.util.Date;

@Entity(name = "answers")
public class Answers {
    @Id //pk
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Long userId;
    private Long questionId;
    private String answer;
    private Date createdAt;
    private Date updatedAt;
    private boolean deleted;
}
