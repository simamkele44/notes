import { Api, use } from "@serverless-stack/resources";
import { StorageStack } from "./storageStack";

export function ApiStack({ stack, app }) {
    const { table } = use(StorageStack);
    // Create the API
    const api = new Api(stack, "NotesApi", {
        defaults: {
            function: {
                permissions: [table],
            environment: {
                TABLE_NAME: table.tableName,
                },
            },
        },
        routes: {
        "POST /notes": "functions/create.main",
        "GET /notes/{id}": "functions/get.main",
        "GET /notes": "functions/list.main",
        "PUT /notes/{id}": "functions/update.main",
        },
    });

    // Show the API endpoint in the output
    stack.addOutputs({
        ApiEndpoint: api.url,
    });

    // Return the API resource
    return {
        api,
    };
}
    

