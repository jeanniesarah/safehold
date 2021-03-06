// 1. Make sure to import 'vue' before declaring augmented types
import Spell, { Ell, State, SyncStat } from "@ellcrys/spell";
import Electron from "electron";
import { SinonStubbedInstance } from "sinon";
import Vue from "vue";
import VueRouter, { Route } from "vue-router";
import Elld from "./dev/core/elld";

declare const should: any;
declare const __static: string;

// 2. Specify a file with the types you want to augment
//    Vue has the constructor type in types/vue.d.ts
declare module "vue/types/vue" {
	// 3. Declare augmentation for Vue
	interface Vue {
		$electron: Electron.App;
		$router: VueRouter;
		$route: Route;
	}
}

declare interface ISecureInfo {
	entropy: Buffer;
	kdfPass: Buffer;
}

declare enum PASSPHRASE_STRENGTH {
	VERY_BAD = 0,
	BAD,
	FAIR,
	GOOD,
	VERY_GOOD,
}

declare interface IDifficultyInfo {
	curDifficulty: string;
	prevDifficulty: string;
}

declare interface IError {
	code: string;
	msg: string;
	modal?: boolean;
	modalType?: string;
}

declare interface ITransactionQuery {
	address: string;
	received?: boolean;
	all?: boolean;
	limit?: number;
	skip?: number;
	sort?: {
		[k: string]: number;
	};
}

declare interface IAccountData {
	privateKey: string;
	isCoinbase: boolean;
	name: string;
	hdPath: string;
	address?: string;
}

declare interface IWalletData {
	createdAt: number;
	version: string;
	accounts: IAccountData[];
	seed: Buffer;
}

declare interface IAccount {
	address: string;
	name: string;
}

declare interface IOverviewData {
	currentBlockNumber: number;
	numPeers: number;
	isSyncing: boolean;
	isSyncEnabled: boolean;
	syncStatus: SyncStat;
	isMining: boolean;
	hashrate: string[];
	diffInfo: IDifficultyInfo;
	averageBlockTime: number;
	totalAccountsBalance: string;
	coinbase: IAccount;
	onBoardModalStat: boolean;
}

declare interface IActivePeer {
	id: string;
	name: string;
	lastSeen: string;
	isInbound: boolean;
}

declare interface ITransaction {
	fee?: string;
	from?: string;
	_id?: string;
	_type?: string;
	nonce?: number;
	senderPubKey?: string;
	sig?: string;
	timestamp?: number | string;
	to?: string;
	type?: number;
	value?: string;
}

declare interface IAccountOverviewData {
	address: string;
	accountName: string;
	balance: string;
	totalReceived: string;
	totalSent: string;
	txs: ITransaction[];
	hasMoreTxs: boolean;
}

declare interface IActiveAccount {
	name: string;
	address: string;
}

declare interface SpellRPCError {
	jsonrpc?: string;
	result?: any;
	error?: {
		code?: number;
		message?: string;
	};
}

declare interface ISpellStubs {
	spell: SinonStubbedInstance<Spell>;
	ell: SinonStubbedInstance<Ell>;
	elld: SinonStubbedInstance<Elld>;
	state?: SinonStubbedInstance<State>;
}

declare interface ITxRequestObj {
	senderAddr: string;
	recipientAddr: string;
	value: string;
	txFee: string;
}

declare interface ITxResponseObj {
	type: string;
	from: string;
	to: string;
	value: string;
	fee: string;
	timestamp: string;
	senderPubKey: string;
	hash: string;
}

declare interface IRefData {
	address: string;
	location: string;
}
