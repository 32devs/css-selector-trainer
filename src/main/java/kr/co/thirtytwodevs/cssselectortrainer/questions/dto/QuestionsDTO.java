package kr.co.thirtytwodevs.cssselectortrainer.questions.dto;

import java.util.Date;

import kr.co.thirtytwodevs.cssselectortrainer.questions.domain.Questions;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
public class QuestionsDTO {
    private Long id;
    private String contents;
    private boolean deleted;
    private int step;
    private Date createdAt;
    private Date updatedAt;
    private String solution;
    private String title;

    public static QuestionsDTO fromEntity(Questions entity) {
        return QuestionsDTO.builder()
            .id(entity.getId())
            .contents(entity.getContents())
            .deleted(false)
            .step(entity.getStep())
            .createdAt(entity.getCreatedAt())
            .updatedAt(entity.getUpdatedAt())
            .solution(entity.getSolution())
            .title(entity.getTitle())
            .build();
    }
}
