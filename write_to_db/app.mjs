export const lambdaHandler = async (event, context) => {
    try {
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Almond says hi',
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }
};