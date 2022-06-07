import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <main>
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content text-center">
            <div id="main" class="max-w-md hidden">
              <h1 class="text-2xl">Authorize and sign with Internet Identity</h1>
              <input placeholder="Describe your proposal.." class="input input-bordered input-primary w-full max-w-xs" id="name" alt="Name" type="text" />
              <a id="login" href="#login" class="btn btn-secondary mt-4">Login</a>
              <a id="propose" href="#propose" class="mt-4 btn btn-primary">Propose</a>
              <div id="list" class="flex flex-col"></div>
            </div>
          </div>
        </div>
      </main>

    );
  }
}
