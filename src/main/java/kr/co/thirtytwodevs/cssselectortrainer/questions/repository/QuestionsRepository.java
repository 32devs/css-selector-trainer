package kr.co.thirtytwodevs.cssselectortrainer.questions.repository;

import kr.co.thirtytwodevs.cssselectortrainer.questions.domain.Questions;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface QuestionsRepository extends JpaRepository<Questions, Long> {
    //등록된 전제 문항조회
    //List<Questions> findAll();
}
