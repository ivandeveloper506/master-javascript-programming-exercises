FROM gitpod/workspace-full
USER gitpod
RUN npm i jest@24.8.0 -g && npm i breathecode-cli@1.2.73 -g