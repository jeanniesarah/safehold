<template>
  <transition name="fade">
    <div class="modal-overlay" id="overlay" v-if="open">
      <div class="modal-pane h10pct">
        <div class="modal-override-warning">
          <div class="overlay-content">
            <div class="overlay-header">
              <h1>WALLET OVERRIDE WARNING</h1>
              <button v-on:click="open=false" class="overlay-close"></button>
            </div>
            <div class="p-4 text-muted">
              You are about to override an existing wallet on this computer.
              If you proceed, the wallet will be deleted and replaced with a
              new one. If you know what you are doing and have decided to proceed
              ensure you have your 12-word seed phrase of the wallet or
              backup the wallet data for when you decided to recover it.
              <b
                class="text-danger"
              >
                If you do not have the 12-word phrase or the wallet file backed up,
                you will lose any coins in the current wallet if you proceed.
              </b>.
            </div>
            <div class="form-element text-right button-area mt-n3 position-relative">
              <button class="btn btn-light btn-cancel" type="submit" v-on:click="open=false">Cancel</button>
              <button
                class="btn btn-primary btn-ok btn-danger"
                type="submit"
                v-on:click="open=false; proceedCB()"
              >Proceed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>


<script lang="ts">
import {
	ModalWalletOverrideWarningOpen,
	ModalWalletOverrideWarningClose,
} from '../constants/events';

export default {
	data() {
		return {
			open: false,
			proceedCB: null,
		};
	},
	created() {
		this.$bus.$on(ModalWalletOverrideWarningOpen, proceedCB => {
			this.proceedCB = proceedCB;
			this.open = true;
		});

		this.$bus.$on(ModalWalletOverrideWarningClose, () => {
			this.open = false;
		});
	},
	methods: {},
};
</script>
