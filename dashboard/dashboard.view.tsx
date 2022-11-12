import {
  Button,
  Card,
  Link,
  Stack,
  Table,
  TextInput,
  Textarea,
  Title,
  useComponentState,
} from "@airplane/views";
import { useEffect } from "react";

const Dashboard = () => {
  const { selectedRow: selectedComment } =
    useComponentState("comments");

  return (
    <Stack>
      <Title>Dashboard</Title>
      <Table
        columns={[
          { accessor: "content", label: "Comment" },
          { accessor: "status", label: "Status" },
        ]}
        hiddenColumns={["id", "is_approved"]}
        id="comments"
        outputTransform={(data) =>
          data.Q1.map((value) => ({
            ...value,
            status:
              value.is_approved === false
                ? "Rejected"
                : value.is_approved === true
                ? "Approved"
                : "Pending",
          }))
        }
        rowSelection="single"
        task="list_comments"
        title="Comments"
      />
      {selectedComment && (
        <Card>
          <Stack>
            <TextInput label="ID" value={selectedComment.id} />
            <Textarea
              label="Comment"
              readOnly
              value={selectedComment.content}
            />
            {selectedComment.status === "Pending" ? (
              <Stack direction="row">
                <Button
                  color="success"
                  id="approve_comment"
                  task={{
                    params: { comment_id: selectedComment.id },
                    refetchTasks: ["list_comments"],
                    slug: "approve_comment",
                  }}
                >
                  Approve
                </Button>
                <Button
                  color="error"
                  id="reject_comment"
                  task={{
                    params: { comment_id: selectedComment.id },
                    refetchTasks: ["list_comments"],
                    slug: "reject_comment",
                  }}
                  variant="light"
                >
                  Reject
                </Button>
              </Stack>
            ) : (
              <Button
                color="secondary"
                id="reset_comment"
                task={{
                  params: { comment_id: selectedComment.id },
                  refetchTasks: ["list_comments"],
                  slug: "reset_comment",
                }}
                variant="light"
              >
                Reset
              </Button>
            )}
          </Stack>
        </Card>
      )}
    </Stack>
  );
};

export default Dashboard;
