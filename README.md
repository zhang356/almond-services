# Almond backend Infra and APIs
This includes Almond API code and infra code

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## Local Testing
* ``` cdk synth --no-staging ``` generate cfn template
* ``` sam local invoke write_to_db --no-event -t cdk.out/AlmondApiStack.template.json``` invoke write_to_db lambda
* ``` sam local start-api -t cdk.out/AlmondApiStack.template.json ``` start local server

## CDK Deployment
* ``` aws sts get-caller-identity --profile davidzmh ``` get AWS account info: UserId, Account, Arn
* ``` cdk bootstrap aws://309550911295/us-west-2 --profile davidzmh ``` https://docs.aws.amazon.com/cdk/v2/guide/cli.html#cli-bootstrap
* ``` cdk deploy --profile davidzmh ``` deploy Infra code to AWS 