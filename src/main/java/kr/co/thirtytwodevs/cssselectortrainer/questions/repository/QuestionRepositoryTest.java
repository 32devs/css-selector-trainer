package kr.co.thirtytwodevs.cssselectortrainer.questions.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.thirtytwodevs.cssselectortrainer.questions.domain.Questions;

public interface QuestionRepositoryTest extends JpaRepository<Questions, Long> {

	List<Questions> findByTitle(String title);
}
