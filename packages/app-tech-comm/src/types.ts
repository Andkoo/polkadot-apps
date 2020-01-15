// Copyright 2017-2020 @polkadot/app-democracy authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DerivedCollectiveProposals } from '@polkadot/api-derive/types';
import { AccountId } from '@polkadot/types/interfaces';

export interface ComponentProps {
  className?: string;
  proposals?: DerivedCollectiveProposals;
  members?: AccountId[];
}
