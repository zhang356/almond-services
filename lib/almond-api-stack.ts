import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AlmondApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const writeToDbLambda = new lambda.Function(this, 'write_to_db', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'app.lambdaHandler',
      code: lambda.Code.fromAsset('./write_to_db'),
      tracing: lambda.Tracing.ACTIVE,
      timeout: cdk.Duration.seconds(28)
    });

    // ###################################################
    // API Gateway and routes
    // ###################################################
    new apigateway.LambdaRestApi(this, "write-to-db-api", {
      handler: writeToDbLambda,
      restApiName: "write to db",
      description: "convert text to embeddings then store in vector DB",
      integrationOptions: {
        timeout: cdk.Duration.seconds(29)
      }
    });
    // const writeToDb = api.root.addResource('postConverstaionToDb');
    // writeToDb.addMethod('GET')

    // const writeToDbIntegration = new apigateway.LambdaIntegration(writeToDbLambda, {
    //   requestTemplates: { "application/json": '{ "statusCode": "200" }' }
    // });

    // api.root. addMethod('GET', writeToDbIntegration);
  }
}
