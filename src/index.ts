import { sendDugnadAttendanceStats, sendDugnadInvite } from "./actions";
import { createMattermostClient } from "./client";
import config from "./config";
import { startCronTasks } from "./cron";

const client = createMattermostClient();

if (config.isProd) startCronTasks(client);

await sendDugnadInvite(client)
await sendDugnadAttendanceStats(client)