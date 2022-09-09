import app from "./app";
import { environments } from '../environments';

app.listen(environments.PORT, () => console.log(`🚀 Server started on port ${environments.PORT}!`));
