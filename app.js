import file from "@rcompat/fs/file";

console.log(await file("/tmp/tmp.txt").text());
