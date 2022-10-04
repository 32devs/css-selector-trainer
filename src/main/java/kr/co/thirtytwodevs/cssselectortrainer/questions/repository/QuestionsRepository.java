package kr.co.thirtytwodevs.cssselectortrainer.questions.repository;

import kr.co.thirtytwodevs.cssselectortrainer.questions.domain.Questions;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionsRepository extends JpaRepository<Questions, Long> {
    //등록된 전제 문항조회
    //List<Questions> findAll();
}
