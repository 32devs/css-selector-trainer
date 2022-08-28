package kr.co.thirtytwodevs.cssselectortrainer.questions.repository;

import java.util.List;

import kr.co.thirtytwodevs.cssselectortrainer.questions.domain.Questions;

public interface QuestionsRepository  {
    //등록된 전제 문항조회
    List<Questions> findAll();
}
