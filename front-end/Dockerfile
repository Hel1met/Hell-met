FROM node:14.15.3
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install
#RUN npm install -g serve
CMD ["npm", "run", "build"]
#ENTRYPOINT ["serve", "-s", "build"]
LABEL key="Name"
LABEL key="Version"