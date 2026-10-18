export interface TaskManagerPromptDefaults {
  defaultAssigneeAgentId?: string;
}

export const buildTaskManagerDefaultsBlock = ({
  defaultAssigneeAgentId,
}: TaskManagerPromptDefaults): string[] => {
  if (!defaultAssigneeAgentId) return [];

  return [
    '<task_manager_defaults>',
    `Default TuT AI agent id: ${defaultAssigneeAgentId}`,
    'Use this id as assigneeAgentId when you decide a task should be assigned to the default TuT AI assistant.',
    "Do not use it as a listTasks filter unless the user asks for TuT AI's tasks.",
    '</task_manager_defaults>',
    '',
  ];
};

export const buildTaskManagerDefaultsPrompt = (defaults: TaskManagerPromptDefaults): string =>
  buildTaskManagerDefaultsBlock(defaults).join('\n').trim();
