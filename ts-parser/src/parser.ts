import { readFileSync } from "fs";
import * as ts from "typescript";

export function parseTSfile(fileName: string): ts.SourceFile {
    const sourceFile: ts.SourceFile = ts.createSourceFile(
        fileName,
        readFileSync(fileName).toString(),
        ts.ScriptTarget.ES2015,
        /*setParentNodes */ true
    );
    return sourceFile
}