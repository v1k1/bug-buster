import { CosmosClient } from "@azure/cosmos";
import { createWriteStream, WriteStream } from "fs";

type Sink = {
    add: (text: string) => void
    close: () => void
}

class FileSystemSink implements Sink {
    readonly stream: WriteStream;
    constructor(fileName: string) {
        this.stream = createWriteStream(fileName);
    }

    add(text: string): void {
        this.stream.write(text);
    }

    close() {
        this.stream.close();
    }
}

class CosmosDBSink implements Sink {
    readonly client: CosmosClient;
    constructor(client: CosmosClient) {
        this.client = client;
    }

    add(text: string): void {
    }

    close() {
    }
}