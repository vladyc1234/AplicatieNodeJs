class UpdateProjectDTO {
  constructor({ projectName, startDate, targetEndDate, actualEndDate, modifiedBy }) {
    this.projectName = projectName;
    this.startDate = startDate;
    this.targetEndDate = targetEndDate;
    this.actualEndDate = actualEndDate;
    this.modifiedBy = modifiedBy;
  }
}

module.exports = UpdateProjectDTO;