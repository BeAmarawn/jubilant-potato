export function GET() {
  try {
    return Response.json({
      taskId: 1,
      taskName: "Open Jira",
      description: "Login on Jira",
      completed: false,
    });
  } catch (reason) {
    const message =
      reason instanceof Error ? reason.message : "Unexpected exception";

    return new Response(message, { status: 500 });
  }
}
