class CreateProjectDTO {
    constructor({ projectName, startDate, targetEndDate, actualEndDate, createdBy }) {
      this.projectName = projectName;
      this.startDate = startDate;
      this.targetEndDate = targetEndDate;
      this.actualEndDate = actualEndDate;
      this.createdBy = createdBy;
    }
  }

module.exports = CreateProjectDTO;