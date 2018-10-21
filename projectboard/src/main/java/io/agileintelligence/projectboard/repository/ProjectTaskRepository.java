package io.agileintelligence.projectboard.repository;

import io.agileintelligence.projectboard.domain.ProjectTask;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectTaskRepository extends CrudRepository<ProjectTask, Long> {

    ProjectTask getById(Long id);
}
