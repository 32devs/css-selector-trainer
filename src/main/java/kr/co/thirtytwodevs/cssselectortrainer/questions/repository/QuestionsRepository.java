package kr.co.thirtytwodevs.cssselectortrainer.questions.repository;

import kr.co.thirtytwodevs.cssselectortrainer.questions.domain.Questions;

import java.util.List;
import java.util.Optional;

public interface QuestionsRepository {
    //등록된 전제 문항조회
    List<Questions> findAll();
}
