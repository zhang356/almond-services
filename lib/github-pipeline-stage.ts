import * as cdk from 'aws-cdk-lib';
import { Construct } from "constructs";
import { AlmondApiStack } from './almond-api-stack';

export class GithubPipelineStage extends cdk.Stage {

    constructor(scope: Construct, id: string, props?: cdk.StageProps) {
      super(scope, id, props);

      const apiStack = new AlmondApiStack(this, 'apiStack');
    }
}