UPDATE
	"comments"
SET
	is_approved = TRUE
WHERE
	id = :comment_id;
