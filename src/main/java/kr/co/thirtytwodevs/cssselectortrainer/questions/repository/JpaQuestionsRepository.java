package kr.co.thirtytwodevs.cssselectortrainer.questions.repository;

import kr.co.thirtytwodevs.cssselectortrainer.questions.domain.Questions;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class JpaQuestionsRepository implements QuestionsRepository{

    private final EntityManager em;

    public JpaQuestionsRepository(EntityManager em) {
        this.em = em;
    }

    @Override
    public List<Questions> findAll() {
        return em.createQuery("select q from questions q", Questions.class)
                .getResultList();
    }
}
