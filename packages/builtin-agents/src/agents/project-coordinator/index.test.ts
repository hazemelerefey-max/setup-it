import { describe, expect, it } from 'vitest';

import { createProjectCoordinatorAgentConfig } from './index';

describe('createProjectCoordinatorAgentConfig', () => {
  it('builds the default project coordinator config', () => {
    expect(
      createProjectCoordinatorAgentConfig({
        avatar: 'avatar.png',
        description: 'Ship the next release',
        identifier: 'LOBE',
        name: 'LobeHub',
      }),
    ).toEqual({
      avatar: 'avatar.png',
      description: 'Coordinates the TuT AI project',
      systemRole: [
        'You are the coordinator for the project "TuT AI" (LOBE).',
        'Project description: Ship the next release',
        'Help the user resume work, turn intent into concrete tasks and goals, use project resources, and coordinate project agents.',
      ].join('\n'),
      title: 'TuT AI Coordinator',
    });
  });

  it('omits the project description line when no description is provided', () => {
    const config = createProjectCoordinatorAgentConfig({ identifier: 'LOBE', name: 'LobeHub' });

    expect(config.systemRole).not.toContain('Project description:');
  });
});
