import Sequelize from 'sequelize';
import _ from 'lodash';

/*  Database Connections Specs -- dbName, dbUsername and password */

const Conn = new Sequelize(
  'collabPro',
  'root',
  'password',
  {
    dialect: 'mysql',
    host: 'localhost'
  }
);

/*  Data Reserve Structures -- Storing User and Project information */

const Users = Conn.define('users', {
  userId: { type: Sequelize.STRING, allowNull: false },           // User Name
  email: { type: Sequelize.STRING, validate: { isEmail: true } },
  password: { type: Sequelize.STRING, allowNull: false },
  firstName: { type: Sequelize.STRING, allowNull: false },
  lastName: { type: Sequelize.STRING, allowNull: false },
  dob: { type: Sequelize.DATE, allowNull: false },
  phoneNumber: { type: Sequelize.STRING, allowNull: false },
  company: { type: Sequelize.STRING, allowNull: false },
  department: { type: Sequelize.STRING, allowNull: false },
  userType: { type: Sequelize.STRING, allowNull: false },
  address: { type: Sequelize.STRING, allowNull: false },
  city: { type: Sequelize.STRING, allowNull: false },
  state: { type: Sequelize.STRING, allowNull: true },
  country: { type: Sequelize.STRING, allowNull: false },
  zip: { type: Sequelize.STRING, allowNull: false }
});

const Projects = Conn.define('projects', {
  projectId: { type: Sequelize.STRING, allowNull: false },    // Project Handle
  name: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.STRING, allowNull: false },
  company: { type: Sequelize.STRING, allowNull: false },
  budget: { type: Sequelize.DECIMAL(10,2), allowNull: false },
  manager: { type: Sequelize.STRING, allowNull: false },
  startDate: { type: Sequelize.DATE, allowNull: false },
  endDate: { type: Sequelize.DATE, allowNull: false },
  status: { type: Sequelize.STRING, allowNull: false },
  percentCompletion: { type: Sequelize.DECIMAL(4,2), allowNull: false }
});

const Teams = Conn.define('teams', {
  teamId: { type: Sequelize.STRING, allowNull: false },          // Team Handle
  userId: { type: Sequelize.STRING, allowNull: false },
  projectId: { type: Sequelize.STRING, allowNull: false },
  joiningDate: { type: Sequelize.DATE, allowNull: false }
});

const Timelines = Conn.define('timelines', {
  projectId: { type: Sequelize.STRING, allowNull: false },
  timelineId: { type: Sequelize.STRING, allowNull: false },
  title: { type: Sequelize.STRING, allowNull: false }
});

const Slots = Conn.define('slots', {
  timelineId: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.STRING, allowNull: false },
  startingTimestamp: { type: Sequelize.DATE, allowNull: false },
  endingTimestamp: { type: Sequelize.DATE, allowNull: false },
  status: { type: Sequelize.STRING, allowNull: false }
});

const Requests = Conn.define('requests', {
  senderUserId: { type: Sequelize.STRING, allowNull: false },
  receiverUserId: { type: Sequelize.STRING, allowNull: false },
  projectId: { type: Sequelize.STRING, allowNull: false },
  status: { type: Sequelize.STRING, allowNull: false }
});

const NNotifications = Conn.define('nnotifications', {
  senderUserId: { type: Sequelize.STRING, allowNull: false },
  projectId: { type: Sequelize.STRING, allowNull: false },
  sTimestamp: { type: Sequelize.DATE, allowNull: false },
  title: { type: Sequelize.STRING, allowNull: false },
  body: { type: Sequelize.STRING, allowNull: false },
  status: { type: Sequelize.STRING, allowNull: false }
});

const Todos = Conn.define('todos', {
  projectId: { type: Sequelize.STRING, allowNull: false },
  title: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.STRING, allowNull: false },
  department: { type: Sequelize.STRING, allowNull: false },
  createdBy: { type: Sequelize.STRING, allowNull: false },
  createDate: { type: Sequelize.DATE, allowNull: false },
  broadcastTo: { type: Sequelize.STRING, allowNull: false },
  deadline: { type: Sequelize.DATE, allowNull: false },
  status: { type: Sequelize.STRING, allowNull: false },
  resolvedBy: { type: Sequelize.STRING, allowNull: false },
  resolvedOn: { type: Sequelize.DATE, allowNull: false }
});

const Tickits = Conn.define('tickits', {
  title: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.STRING, allowNull: false },
  department: { type: Sequelize.STRING, allowNull: false },
  projectId: { type: Sequelize.STRING, allowNull: false },
  type: { type: Sequelize.STRING, allowNull: false },
  status: { type: Sequelize.STRING, allowNull: false },
  bookedBy:{ type: Sequelize.STRING, allowNull: false },
  bookedOn: { type: Sequelize.DATE, allowNull: false },
  resolvedBy: { type: Sequelize.STRING, allowNull: false },
  verificationStatus: { type: Sequelize.STRING, allowNull: false },
  verifiedBy: { type: Sequelize.STRING, allowNull: false },
  verifiedOn: { type: Sequelize.DATE, allowNull: false }
});


/*  Relations -- according to the structure of the database */

Users.hasMany(Projects);
Users.hasMany(Requests);
Users.hasMany(NNotifications);
Projects.belongsTo(Users);


/* +++++++++  Relations that are auto-implemented:  ++++++++++++

      Projects.hasMany(Timelines);
      Projects.hasMany(Todos);
      Projects.hasMany(Tickits);
      Timelines.hasMany(Slots);
      Users.hasMany(Teams);
      Teams.belongsTo(Users);


/* ======== CREATING THE RELATIONS OF THE DATABASE ========= */

//Conn.sync({ force: true });


export default Conn;
