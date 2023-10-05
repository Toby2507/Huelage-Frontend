import { gql } from "@apollo/client";

export const SIGNUP_USER = gql(`
  mutation ($input: CreateUserInput!) {
    signUpUser(input: $input) {
      userId
      firstName
      lastName
    }
  }
`);

export const SIGNUP_VENDOR = gql(`
  mutation ($input: CreateVendorInput!) {
    signUpVendor(input: $input) {
      vendorId
      businessName
    }
  }
`);

export const LOGIN_USER = gql(`
  mutation ($input: AuthenticateUserInput!) {
    signInUser(input: $input) {
      entity {
        entityId
        email
        phone
        imgUrl
        wallet {
          walletId
        }
        accessToken
        refreshToken
      }
      firstName
      lastName
    }
  }
`);

export const LOGIN_VENDOR = gql(`
  mutation ($input: AuthenticateVendorInput!) {
    signInVendor(input: $input) {
      entity {
        entityId
        email
        phone
        imgUrl
        wallet {
          walletId
        }
        accessToken
        refreshToken
      }
      businessName
      businessAddress
      repName
    }
  }
`);

export const VERIFY_OTP = gql(`
  mutation ($input: VerifyPhoneInput!) {
    verifyPhoneOtp(input: $input) {
      entityId
      wallet {
        walletId
      }
      email
      phone
      imgUrl
      refreshToken
      accessToken
      user {
        firstName
        lastName
      }
      vendor {
        businessName
        businessAddress
        repName
      }
    }
  }
`);

export const REFRESH_OTP = gql(`
  mutation ($input: UpdatePhoneInput!) {
    updatePhone(input: $input) {
      entityId
    }
  }
`);

export const REQUEST_EMAIL_VERIFICATION = gql(`
  mutation ($email: String!) {
    requestEmailVerification(email: $email) {
      entityType
      email
    }
  }
`);

export const VERIFY_EMAIL = gql(`
  mutation ($input: VerifyEmailInput!) {
    verifyEmailOtp(input: $input) {
      entityId
    }
  }
`);

export const SET_PASSWORD = gql(`
  mutation ($input: ForgotPasswordInput!) {
    forgotPassword(input: $input) {
      entityId
      user {
        firstName
        lastName
      }
      vendor {
        businessName
        businessAddress
        repName
      }
    }
  }
`);