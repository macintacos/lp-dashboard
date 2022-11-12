UPDATE
	"comments"
SET
	is_approved = NULL
WHERE
	id = :comment_id;
