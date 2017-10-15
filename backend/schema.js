import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLDecimal,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';
import GraphQLDate from 'graphql-date';
import Db from './db';


// ******* TABLE STRUCTURE RELATION *********

const User = new GraphQLObjectType({
  name: 'User',
  description: 'This represents a User/adminastrator/project manager',
  fields: () => {
    return {
      id: { type: GraphQLInt,
        resolve (users) { return users.id; } },
      userId: { type: GraphQLString,
        resolve(users) { return users.userName; } },
      email: {type: GraphQLString,
        resolve(users) { return users.email; } },
      password: { type: GraphQLString,
        resolve (users) { return users.password; } },
      firstName: { type: GraphQLString,
        resolve (users) { return users.firstName; } },
      lastName: { type: GraphQLString,
        resolve (users) { return users.lastName; } },
      dob: { type: GraphQLDate,
        resolve (users) { return users.dob; } },
      phoneNumber: { type: GraphQLString,
        resolve (users) { return users.phoneNumber; } },
      company: { type: GraphQLString,
        resolve (users) { return users.company; } },
      department: { type: GraphQLString,
        resolve (users) { return users.department; } },
      userType: { type: GraphQLString,
        resolve (users) { return users.userType; } },
      address: { type: GraphQLString,
        resolve (users) { return users.address; } },
      city: { type: GraphQLString,
        resolve (users) { return users.city; } },
      state: { type: GraphQLString,
        resolve (users) { return users.state; } },
      country: { type: GraphQLString,
        resolve (users) { return users.country; } },
      zip: { type: GraphQLString,
        resolve (users) { return users.zip; } }
    };
  }
});


const Project = new GraphQLObjectType({
  name: 'Project',
  description: 'This represents a Project -- Static',
  fields: () => {
    return {
      id: { type: GraphQLInt,
        resolve (projects) { return projects.id; } },
      projectId: { type: GraphQLString,
        resolve (projects) { return projects.projectId; } },
      name: {type: GraphQLString,
        resolve (projects) { return projects.name; } },
      description: { type: GraphQLString,
        resolve (projects) { return projects.description; } },
      company: { type: GraphQLString,
        resolve (projects) { return projects.company; } },
      budget: { type: GraphQLFloat,
        resolve (projects) { return projects.budget; } },
      manager: { type: GraphQLString,
        resolve (projects) { return projects.manager; } },
      startDate: { type: GraphQLDate,
        resolve (projects) { return projects.startDate; } },
      endDate: { type: GraphQLDate,
        resolve (projects) { return projects.endDate; } },
      status: { type: GraphQLString,
        resolve (projects) { return projects.status; } },
      percentCompletion: { type: GraphQLFloat,
        resolve (projects) { return projects.percentCompletion; } }
    };
  }
});


const Team = new GraphQLObjectType({
  name: 'Team',
  description: 'This represents a Team -- Static',
  fields: () => {
    return {
      id: { type: GraphQLInt,
        resolve (teams) { return teams.id; } },
      teamId: { type: GraphQLString,
        resolve (teams) { return teams.teamId; } },
      userId: {type: GraphQLString,
        resolve (teams) { return teams.userId; } },
      projectId: { type: GraphQLString,
        resolve (teams) { return teams.projectId; } },
      joiningDate: { type: GraphQLDate,
        resolve (teams) { return teams.joiningDate; } }
    };
  }
});



const Timeline = new GraphQLObjectType({
  name: 'Timeline',
  description: 'This represents a Timeline -- Static',
  fields: () => {
    return {
      id: { type: GraphQLInt,
        resolve (timelines) { return timelines.id; } },
      projectId: { type: GraphQLString,
        resolve (timelines) { return timelines.projectId; } },
      timelineId: {type: GraphQLString,
        resolve (timelines) { return timelines.timelineId; } },
      title: { type: GraphQLString,
        resolve (timelines) { return timelines.title; } }
    };
  }
});



const Slot = new GraphQLObjectType({
  name: 'Slot',
  description: 'This represents a Slot in a Timeline -- Static',
  fields: () => {
    return {
      id: { type: GraphQLInt,
        resolve (slots) { return slots.id; } },
      timelineId: { type: GraphQLString,
        resolve (slots) { return slots.timelineId; } },
      description: { type: GraphQLString,
        resolve (slots) { return slots.description; } },
      startingTimestamp: {type: GraphQLDate,
        resolve (slots) { return slots.startingTimestamp; } },
      endingTimestamp: { type: GraphQLDate,
        resolve (slots) { return slots.title; } },
      status: { type: GraphQLString,
        resolve (slots) { return slots.status; } }
    };
  }
});



const Request = new GraphQLObjectType({
  name: 'Request',
  description: 'This represents a Request -- Static',
  fields: () => {
    return {
      id: { type: GraphQLInt,
        resolve (requests) { return requests.id; } },
      senderUserId: { type: GraphQLString,
        resolve (requests) { return requests.senderUserId; } },
      receiverUserId: {type: GraphQLString,
        resolve (requests) { return requests.receiverUserId; } },
      projectId: { type: GraphQLString,
        resolve (requests) { return requests.projectId; } },
      status: { type: GraphQLString,
        resolve (requests) { return requests.status; } }
    };
  }
});


const NNotification = new GraphQLObjectType({
  name: 'NNotification',
  description: 'This represents a Project Notification -- Dynamic',
  fields: () => {
    return {
      id: { type: GraphQLInt,
        resolve (nnotifications) { return nnotifications.id; } },
      senderUserId: { type: GraphQLString,
        resolve (nnotifications) { return nnotifications.senderUserId; } },
      projectId: {type: GraphQLString,
        resolve (nnotifications) { return nnotifications.projectId; } },
      sTimestamp: { type: GraphQLDate,
        resolve (nnotifications) { return nnotifications.sTimestamp; } },
      title: { type: GraphQLString,
        resolve (nnotifications) { return nnotifications.title; } },
      body: { type: GraphQLString,
        resolve (nnotifications) { return nnotifications.body; } },
      status: { type: GraphQLString,
        resolve (nnotifications) { return nnotifications.status; } }
    };
  }
});


const Todo = new GraphQLObjectType({
  name: 'Todo',
  description: 'This represents a to-do in a project -- Dynamic',
  fields: () => {
    return {
      id: { type: GraphQLInt,
        resolve (todos) { return todos.id; } },
      projectId: { type: GraphQLString,
        resolve (todos) { return todos.projectId; } },
      title: {type: GraphQLString,
        resolve (todos) { return todos.title; } },
      description: { type: GraphQLString,
        resolve (todos) { return todos.description; } },
      department: { type: GraphQLString,
        resolve (todos) { return todos.department; } },
      createdBy: { type: GraphQLString,
        resolve (todos) { return todos.createdBy; } },
      createDate: { type: GraphQLDate,
        resolve (todos) { return todos.createDate; } },
      broadcastTo: { type: GraphQLString,
        resolve (todos) { return todos.broadcastTo; } },
      deadline: { type: GraphQLDate,
        resolve (todos) { return todos.deadline; } },
      status: { type: GraphQLString,
        resolve (todos) { return todos.status; } },
      resolvedBy: { type: GraphQLString,
        resolve (todos) { return todos.resolvedBy; } },
      resolvedOn: { type: GraphQLDate,
        resolve (todos) { return todos.resolvedOn; } }
    };
  }
});


const Tickit = new GraphQLObjectType({
  name: 'Tickit',
  description: 'This represents a bug or flash-point in a project -- Dynamic',
  fields: () => {
    return {
      id: { type: GraphQLInt,
        resolve (tickits) { return tickits.id; } },
      title: { type: GraphQLString,
        resolve (tickits) { return tickits.title; } },
      description: {type: GraphQLString,
        resolve (tickits) { return tickits.description; } },
      department: { type: GraphQLString,
        resolve (tickits) { return tickits.department; } },
      projectId: { type: GraphQLString,
        resolve (tickits) { return tickits.projectId; } },
      type: { type: GraphQLString,
        resolve (tickits) { return tickits.type; } },
      status: { type: GraphQLString,
        resolve (tickits) { return tickits.status; } },
      bookedBy: { type: GraphQLString,
        resolve (tickits) { return tickits.bookedBy; } },
      bookedOn: { type: GraphQLDate,
        resolve (tickits) { return tickits.bookedOn; } },
      resolvedBy: { type: GraphQLString,
        resolve (tickits) { return tickits.resolvedBy; } },
      verificationStatus: { type: GraphQLString,
        resolve (tickits) { return tickits.verificationStatus; } },
      verifiedBy: { type: GraphQLString,
        resolve (tickits) { return tickits.verifiedBy; } },
      verifiedOn: { type: GraphQLDate,
        resolve (tickits) { return tickits.verifiedOn; } }
    };
  }
});



// ******* END OF TABLE STRUCTURE *********




// ******* QUERY STRUCTURE *********

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query object -- all queries of the db.js',
  fields: () => {
    return {

      signInAuth: {
        type: new GraphQLList(User),
        args: {
          email: { type: GraphQLString },
          password: { type: GraphQLString }
        },
        resolve (root, args) {
          return Db.models.users.findAll({ where: args });
        }
      },

      forgotPassword: {
        type: new GraphQLList(User),
        args: {
          email: { type: GraphQLString }
        },
        resolve (root, args) {
          return Db.models.users.findAll({ where: args });
        }
      },

      profile: {
        type: new GraphQLList(User),
        args: {
          id: { type: GraphQLInt },
          email: { type: GraphQLString },
          password: { type: GraphQLString }
        },
        resolve (root, args) {
          return Db.models.users.findAll({ where: args });
        }
      },

      projectDetails: {
        type: new GraphQLList(Project),
        args: {
          id: { type: GraphQLInt },
          projectId: { type: GraphQLString },
          name: { type: GraphQLString },
          manager: { type: GraphQLString }
        },
        resolve (root, args) {
          return Db.models.projects.findAll({ where: args });
        }
      },

      teamDetails: {
        type: new GraphQLList(Team),
        args: {
          id: { type: GraphQLInt },
          teamId: { type: GraphQLString },
          userId: { type: GraphQLString },
          projectId: { type: GraphQLString }
        },
        resolve (root, args) {
          return Db.models.teams.findAll({ where: args });
        }
      },

      timelineInfo: {
        type: new GraphQLList(Timeline),
        args: {
          id: { type: GraphQLInt },
          projectId: { type: GraphQLString },
          timelineId: { type: GraphQLString },
        },
        resolve (root, args) {
          return Db.models.timelines.findAll({ where: args });
        }
      },

      slotInfo: {
        type: new GraphQLList(Slot),
        args: {
          id: { type: GraphQLInt },
          timelineId: { type: GraphQLString },
        },
        resolve (root, args) {
          return Db.models.slots.findAll({ where: args });
        }
      },

      getTodos: {
        type: new GraphQLList(Todo),
        args: {
          id: { type: GraphQLInt },
          projectId: { type: GraphQLString },
          department: { type: GraphQLString },
          createdBy: { type: GraphQLString },
          broadcastTo: { type: GraphQLString },
          status: { type: GraphQLString },
        },
        resolve (root, args) {
          return Db.models.todos.findAll({ where: args });
        }
      },

      getTickits: {
        type: new GraphQLList(Tickit),
        args: {
          id: { type: GraphQLInt },
          title: { type: GraphQLString },
          department: { type: GraphQLString },
          projectId: { type: GraphQLString },
          type: { type: GraphQLString },
          status: { type: GraphQLString },
          bookedBy: { type: GraphQLString },
          verificationStatus: { type: GraphQLString },
        },
        resolve (root, args) {
          return Db.models.tickits.findAll({ where: args });
        }
      },

      newsFeeds: {
        type: new GraphQLList(NNotification),
        args: {
          id: { type: GraphQLInt },
          projectId: { type: GraphQLString },
          status: { type: GraphQLString }
        },
        resolve (root, args) {
          return Db.models.nnotifications.findAll({ where: args });
        }
      },

      myRequests: {
        type: new GraphQLList(Request),
        args: {
          senderUserId: { type: GraphQLString },
          receiverUserId: { type: GraphQLString },
          status: { type: GraphQLString }
        },
        resolve (root, args) {
          return Db.models.requests.findAll({ where: args });
        }
      },





    };
  }
});


// ******* END QUERY STRUCTURE *********






// ******* MUTATION STRUCTURE *********


const Mutation = new GraphQLObjectType({
  name:'Mutation',
  description: 'For implementing CRUD features',
  fields:{

// ******* CREATE API STRUCTURE *********

    signUpUser:{
      type: User,
      args: {
          userId: { type: new GraphQLNonNull(GraphQLString) },
          email: { type: new GraphQLNonNull(GraphQLString) },
          password: { type: new GraphQLNonNull(GraphQLString) },
          firstName: { type: new GraphQLNonNull(GraphQLString) },
          lastName: { type: new GraphQLNonNull(GraphQLString) },
          dob: { type: new GraphQLNonNull(GraphQLDate) },
          phoneNumber: { type: new GraphQLNonNull(GraphQLString) },
          company: { type: new GraphQLNonNull(GraphQLString) },
          department: { type: new GraphQLNonNull(GraphQLString) },
          userType: { type: new GraphQLNonNull(GraphQLString) },
          address: { type: new GraphQLNonNull(GraphQLString) },
          city: { type: new GraphQLNonNull(GraphQLString) },
          state: { type: new GraphQLNonNull(GraphQLString) },
          country: { type: new GraphQLNonNull(GraphQLString) },
          zip: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve (_, args) {
        return Db.models.users.create({
          userId: args.userId,
          email: args.email.toLowerCase(),
          password: args.password,
          firstName: args.firstName,
          lastName: args.lastName,
          dob: args.dob,
          phoneNumber: args.phoneNumber,
          company: args.company,
          department: args.department,
          userType: args.userType,
          address: args.address,
          city: args.city,
          state: args.state,
          country: args.country,
          zip: args.zip
        });
      }
    },


    createProject:{
      type: Project,
      args: {
          projectId: { type: new GraphQLNonNull(GraphQLString) },
          name: { type: new GraphQLNonNull(GraphQLString) },
          description: { type: new GraphQLNonNull(GraphQLString) },
          company: { type: new GraphQLNonNull(GraphQLString) },
          budget: { type: new GraphQLNonNull(GraphQLFloat) },
          manager: { type: new GraphQLNonNull(GraphQLString) },
          startDate: { type: new GraphQLNonNull(GraphQLDate) },
          endDate: { type: new GraphQLNonNull(GraphQLDate) },
          status: { type: new GraphQLNonNull(GraphQLString) },
          percentCompletion: { type: new GraphQLNonNull(GraphQLFloat) }
      },
      resolve (_, args) {
        return Db.models.projects.create({
          projectId: args.projectId,
          name: args.name,
          description: args.description,
          company: args.company,
          budget: args.budget,
          manager: args.manager,
          startDate: args.startDate,
          endDate: args.endDate,
          status: args.status,
          percentCompletion: args.percentCompletion
        });
      }
    },


    addTimeline: {
      type: Timeline,
      args: {
          projectId: { type: new GraphQLNonNull(GraphQLString) },
          timelineId: { type: new GraphQLNonNull(GraphQLString) },
          title: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve (_, args) {
        return Db.models.timelines.create({
          projectId: args.projectId,
          timelineId: args.timelineId,
          title: args.title
        });
      }
    },


    createSlot: {
      type: Slot,
      args: {
          timelineId: { type: new GraphQLNonNull(GraphQLString) },
          description: { type: new GraphQLNonNull(GraphQLString) },
          startingTimestamp: { type: new GraphQLNonNull(GraphQLDate) },
          endingTimestamp: { type: new GraphQLNonNull(GraphQLDate) },
          status: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve (_, args) {
        return Db.models.slots.create({
          timelineId: args.timelineId,
          description: args.description,
          startingTimestamp: args.startingTimestamp,
          endingTimestamp: args.endingTimestamp,
          status: args.status
        });
      }
    },


    createTeam: {
      type: Team,
      args: {
          teamId: { type: new GraphQLNonNull(GraphQLString) },
          userId: { type: new GraphQLNonNull(GraphQLString) },
          projectId: { type: new GraphQLNonNull(GraphQLString) },
          joiningDate: { type: new GraphQLNonNull(GraphQLDate) }
      },
      resolve (_, args) {
        return Db.models.teams.create({
          teamId: args.teamId,
          userId: args.userId,
          projectId: args.projectId,
          joiningDate: args.joiningDate
        });
      }
    },


    createTodo:{
      type: Todo,
      args: {
          projectId: { type: new GraphQLNonNull(GraphQLString) },
          title: { type: new GraphQLNonNull(GraphQLString) },
          description: { type: new GraphQLNonNull(GraphQLString) },
          department: { type: new GraphQLNonNull(GraphQLString) },
          createdBy: { type: new GraphQLNonNull(GraphQLString) },
          createDate: { type: new GraphQLNonNull(GraphQLDate) },
          broadcastTo: { type: new GraphQLNonNull(GraphQLString) },
          deadline: { type: new GraphQLNonNull(GraphQLDate) },
          status: { type: new GraphQLNonNull(GraphQLString) },
          resolvedBy: { type: new GraphQLNonNull(GraphQLString) },
          resolvedOn: { type: new GraphQLNonNull(GraphQLDate) }
      },
      resolve (_, args) {
        return Db.models.todos.create({
          projectId: args.projectId,
          title: args.title,
          description: args.description,
          department: args.department,
          createdBy: args.createdBy,
          createDate: args.createDate,
          broadcastTo: args.broadcastTo,
          deadline: args.deadline,
          status: args.status,
          resolvedBy: args.resolvedBy,
          resolvedOn: args.resolvedOn
        });
      }
    },


    createTickit:{
      type: Tickit,
      args: {
          title: { type: new GraphQLNonNull(GraphQLString) },
          description: { type: new GraphQLNonNull(GraphQLString) },
          department: { type: new GraphQLNonNull(GraphQLString) },
          projectId: { type: new GraphQLNonNull(GraphQLString) },
          type: { type: new GraphQLNonNull(GraphQLString) },
          status: { type: new GraphQLNonNull(GraphQLString) },
          bookedBy: { type: new GraphQLNonNull(GraphQLString) },
          bookedOn: { type: new GraphQLNonNull(GraphQLDate) },
          resolvedBy: { type: new GraphQLNonNull(GraphQLString) },
          verificationStatus: { type: new GraphQLNonNull(GraphQLString) },
          verifiedBy: { type: new GraphQLNonNull(GraphQLString) },
          verifiedOn: { type: new GraphQLNonNull(GraphQLDate) }
      },
      resolve (_, args) {
        return Db.models.tickits.create({
          title: args.title,
          description: args.description,
          department: args.department,
          projectId: args.projectId,
          type: args.type,
          status: args.status,
          bookedBy: args.bookedBy,
          bookedOn: args.bookedOn,
          resolvedBy: args.resolvedBy,
          verificationStatus: args.verificationStatus,
          verifiedBy: args.verifiedBy,
          verifiedOn: args.verifiedOn
        });
      }
    },


    createRequest: {
      type: Request,
      args: {
          senderUserId: { type: new GraphQLNonNull(GraphQLString) },
          receiverUserId: { type: new GraphQLNonNull(GraphQLString) },
          projectId: { type: new GraphQLNonNull(GraphQLString) },
          status: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve (_, args) {
        return Db.models.requests.create({
          senderUserId: args.senderUserId,
          receiverUserId: args.receiverUserId,
          projectId: args.projectId,
          status: args.status
        });
      }
    },


    createFeed: {
      type: NNotification,
      args: {
          senderUserId: { type: new GraphQLNonNull(GraphQLString) },
          projectId: { type: new GraphQLNonNull(GraphQLString) },
          sTimestamp: { type: new GraphQLNonNull(GraphQLDate) },
          title: { type: new GraphQLNonNull(GraphQLString) },
          body: { type: new GraphQLNonNull(GraphQLString) },
          status: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve (_, args) {
        return Db.models.nnotifications.create({
          senderUserId: args.senderUserId,
          projectId: args.projectId,
          sTimestamp: args.sTimestamp,
          title: args.title,
          body: args.body,
          status: args.status
        });
      }
    },


// ******* DELETE STRUCTURE *********

    deleteUser: {
      type: User,
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve(_, args) {
        return Db.models.users.destroy({ where: args});
      }
    },

    deleteTeamJoin: {
      type: Team,
      args: {
        teamId: { type: new GraphQLNonNull(GraphQLString)  },
        userId: { type: new GraphQLNonNull(GraphQLString)  },
        projectId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(_, args) {
        return Db.models.teams.destroy({ where: args});
      }
    },



// ******* UPDATE STRUCTURE *********


    passwordUpdate: {
      type: User,
      args: {
          userId: { type: new GraphQLNonNull(GraphQLString) },
          email: { type: GraphQLString },
          password: { type: GraphQLString }
        },
        resolve (_, args) {
          return Db.models.users.update({
            password: args.password
          },{where: { userId: args.userId, email: args.email }});
        }
      },


      todoResponse: {
        type: Todo,
        args: {
          id: { type: new GraphQLNonNull(GraphQLInt) },
          status: { type: GraphQLString },
          resolvedBy: { type: GraphQLString },
          resolvedOn: { type: GraphQLDate }
        },
        resolve (_, args) {
          return Db.models.todos.update({
            status: args.status,
            resolvedBy: args.resolvedBy,
            resolvedOn: args.resolvedOn
          },{where: { id: args.id }});
        }
      },


      tickitResponse: {
        type: Tickit,
        args: {
          id: { type: new GraphQLNonNull(GraphQLInt) },
          status: { type: GraphQLString },
          resolvedBy: { type: GraphQLString },
          verificationStatus: { type: GraphQLString }
        },
        resolve (_, args) {
          return Db.models.tickits.update({
            status: args.status,
            resolvedBy: args.resolvedBy,
            verificationStatus: args.verificationStatus
          },{where: { id: args.id }});
        }
      },


      tickitClose: {
        type: Tickit,
        args: {
          id: { type: new GraphQLNonNull(GraphQLInt) },
          status: { type: GraphQLString },
          verificationStatus: { type: GraphQLString },
          verifiedBy: { type: GraphQLString },
          verifiedOn: { type: GraphQLDate }
        },
        resolve (_, args) {
          return Db.models.tickits.update({
            status: args.status,
            verificationStatus: args.verificationStatus,
            verifiedBy: args.verifiedBy,
            verifiedOn: args.verifiedOn
          },{where: { id: args.id }});
        }
      },


      feedsResponse: {
        type: NNotification,
        args: {
            id: { type: new GraphQLNonNull(GraphQLInt) },
            status: { type: GraphQLString }
        },
        resolve (_, args) {
          return Db.models.nnotifications.update({
            status: args.status
          },{where: { id: args.id }});
        }
      },


      requestResponse: {
        type: Request,
        args: {
          id: { type: new GraphQLNonNull(GraphQLInt) },
          status: { type: GraphQLString }
        },
        resolve (_, args) {
          return Db.models.requests.update({
            status: args.status
          },{where: { id: args.id }});
        }
      },


      profileUpdate: {
        type: User,
        args: {
            id: { type: new GraphQLNonNull(GraphQLInt) },
            userId: { type: GraphQLString },
            email: { type: GraphQLString },
            password: { type: GraphQLString },
            firstName: { type: GraphQLString },
            lastName: { type: GraphQLString },
            dob: { type: GraphQLDate },
            phoneNumber: { type: GraphQLString },
            company: { type: GraphQLString },
            department: { type: GraphQLString },
            address: { type: GraphQLString },
            city: { type: GraphQLString },
            state: { type: GraphQLString },
            country: { type: GraphQLString },
            zip: { type: GraphQLString }
          },
          resolve (_, args) {
            return Db.models.users.update({
              email: args.email,
              firstName: args.firstName,
              lastName: args.lastName,
              dob: args.dob,
              phoneNumber: args.phoneNumber,
              company: args.company,
              department: args.department,
              address: args.address,
              city: args.city,
              state: args.state,
              country: args.country,
              zip: args.zip
            },{where: { userId: args.userId, password: args.password }});
          }
        },

        updateProjectSettings: {
          type: Project,
          args: {
              id: { type: new GraphQLNonNull(GraphQLInt) },
              projectId: { type: GraphQLString },

              name: { type: GraphQLString },
              description: { type: GraphQLString },
              company: { type: GraphQLString },
              budget: { type: GraphQLFloat },
              manager: { type: GraphQLString },
              startDate: { type: GraphQLDate },
              endDate: { type: GraphQLDate },
          },
          resolve (_, args) {
            return Db.models.projects.update({
              name: args.name,
              description: args.description,
              company: args.company,
              budget: args.budget,
              manager: args.manager,
              startDate: args.startDate,
              endDate: args.endDate,
            },{where: { projectId: args.projectId }});
          }
        },


        updateProjectStatus: {
          type: Project,
          args: {
            id: { type: new GraphQLNonNull(GraphQLInt) },
            projectId: { type: GraphQLString },
            status: { type: GraphQLString }
          },
          resolve (_, args) {
            return Db.models.projects.update({
              status: args.status
            },{where: { projectId: args.projectId }});
          }
        },


        updateProjectCompletion: {
          type: Project,
          args: {
            id: { type: new GraphQLNonNull(GraphQLInt) },
            projectId: { type: GraphQLString },
            percentCompletion: { type: GraphQLFloat }
          },
          resolve (_, args) {
            return Db.models.projects.update({
              percentCompletion: args.percentCompletion
            },{where: { projectId: args.projectId }});
          }
        },


        updateSlotStatus: {
          type: Slot,
          args: {
            id: { type: new GraphQLNonNull(GraphQLInt) },
            timelineId: { type: GraphQLString },
            status: { type: GraphQLString }
          },
          resolve (_, args) {
            return Db.models.slots.update({
              status: args.status
            },{where: { id: args.id, timelineId: args.timelineId }});
          }
        },



// ******* END OF CRUD STRUCTURE *********

  }
})




// ******* SCHEMA STRUCTURE *********

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation

});

export default Schema;
