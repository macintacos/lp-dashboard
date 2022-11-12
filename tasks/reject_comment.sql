UPDATE
	"comments"
SET
	is_approved = FALSE
WHERE
	id = :comment_id;
