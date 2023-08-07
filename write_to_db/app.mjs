export const lambdaHandler = async (event, context) => {
    try {
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Almond says hello',
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }
};