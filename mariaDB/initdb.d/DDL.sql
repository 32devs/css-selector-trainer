CREATE TABLE questions
(
        id          BIGINT AUTO_INCREMENT
                PRIMARY KEY,
        step        TINYINT                                NULL COMMENT '단계',
        title       VARCHAR(128)                           NULL COMMENT '제목',
        contents    TEXT                                   NULL COMMENT '내용',
        html        TEXT                                   NULL COMMENT 'HTML',
        solution    VARCHAR(256)                           NULL COMMENT '정답',
        description TEXT                                   NULL COMMENT '설명 또는 힌트',
        createdAt   DATETIME   DEFAULT CURRENT_TIMESTAMP() NOT NULL COMMENT '생성일',
        updatedAt   DATETIME   DEFAULT CURRENT_TIMESTAMP() NOT NULL COMMENT '수정일',
        deleted     TINYINT(1) DEFAULT 0                   NOT NULL COMMENT '삭제 여부'
)
        COMMENT '문제 및 정답';

CREATE TABLE answers
(
	id        BIGINT AUTO_INCREMENT
		PRIMARY KEY,
	userId			BIGINT							NULL COMMENT '유저 ID',
	questionId      BIGINT                                NOT NULL COMMENT '단계',
	answer     VARCHAR(256)                           NULL COMMENT '답변내용',
	createdAt DATETIME   DEFAULT CURRENT_TIMESTAMP() NOT NULL COMMENT '생성일',
	updatedAt DATETIME   DEFAULT CURRENT_TIMESTAMP() NOT NULL COMMENT '수정일',
	deleted   TINYINT(1) DEFAULT 0                   NOT NULL COMMENT '삭제 여부'
)
	COMMENT '유저가 답변한 내용';
