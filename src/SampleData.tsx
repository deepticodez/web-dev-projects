export type Task={
    id:number,
    text: string,
    done:boolean
}

export const sampleTasks:Task[] = [
  { id: 1, text: "Clean my computer", done: false },
  { id: 2, text: "Buy a keyboard", done: false }
];

export const sampleTasksDone:Task[] = [
  { id: 3, text: "Write an article about @xstate/test", done: true },
  { id: 4, text: "Write an article about @xstate", done: true }
];
