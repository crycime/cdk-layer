#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import { CdkLayerStack } from './stacks/cdkLayerStack'

const devEnv = {
  account: '334593904424',
  region: 'us-east-1',
}

const app = new cdk.App()
new CdkLayerStack(app, 'CdkLayerStack', { env: devEnv })
