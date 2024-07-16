import AWS from 'aws-sdk';

import { AppError } from '@shared/Util/AppError/AppError';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_DEFAULT_REGION,
});

const ses = new AWS.SES();

export const sendEmail = async (to: string, subject: string, body: string) => {
  const params = {
    Source: process.env.SES_VERIFIED_EMAIL!,
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Subject: {
        Data: subject,
        Charset: 'UTF-8',
      },
      Body: {
        Text: {
          Data: body,
          Charset: 'UTF-8',
        },
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(`Email sent to ${to}: ${result.MessageId}`);
    return result;
  } catch (error: any) {
    throw new AppError(`Failed to send email: ${error.message}`);
  }
};

export const verifyEmailIdentity = async (email: string) => {
  const params = {
    EmailAddress: email,
  };

  try {
    const result = await ses.verifyEmailIdentity(params).promise();
    return result;
  } catch (error: any) {
    throw new AppError(`Failed to verify email identity: ${error.message}`);
  }
};

export const verifyDomainIdentity = async (domain: string) => {
  const params = {
    Domain: domain,
  };

  try {
    const result = await ses.verifyDomainIdentity(params).promise();
    return result;
  } catch (error: any) {
    throw new AppError(`Failed to verify domain identity: ${error.message}`);
  }
};

export const deleteIdentity = async (identity: string) => {
  const params = {
    Identity: identity,
  };

  try {
    const result = await ses.deleteIdentity(params).promise();
    return result;
  } catch (error: any) {
    throw new AppError(`Failed to delete identity: ${error.message}`);
  }
};

export const getIdentityDetails = async (identity: string) => {
  const params = {
    Identities: [identity],
  };

  try {
    const result = await ses.getIdentityVerificationAttributes(params).promise();
    return result.VerificationAttributes[identity];
  } catch (error: any) {
    throw new AppError(`Failed to get identity details: ${error.message}`);
  }
};
