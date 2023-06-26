export default {
  version: 0,
  primaryKey: "projectId",
  type: "object",
  properties: {
    projectId: {
      type: "string",
      maxLength: 1024,
    },
  },
};
