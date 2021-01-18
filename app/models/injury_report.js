const { DataTypes } = require('sequelize')
const db = require('../../config/database')
const Player = require('./player')
const Team = require('./team')

const InjuryReport = db.define(
  'injury_report',
  {
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    player_id: DataTypes.INTEGER,
    team_id: DataTypes.INTEGER,
  },
  {
    timestamps: true,
    underscored: true,
  }
)

InjuryReport.belongsTo(Player, { name: 'player_id', field: 'player_id' })
InjuryReport.belongsTo(Team, { name: 'team_id', field: 'team_id' })

module.exports = InjuryReport
