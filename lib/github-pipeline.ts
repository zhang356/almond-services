import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { GithubPipelineStage } from './github-pipeline-stage';

export class GithubPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'GithubPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('zhang356/almond-services', 'main'),
        commands: ['npm ci', 'npm run build', 'npx cdk synth']
      })
    });

    pipeline.addStage(new GithubPipelineStage(this, 'api', {
        env: { account: '309550911295', region: 'us-west-2' }
    }));
  }
}