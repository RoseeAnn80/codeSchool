CREATE TABLE Trees (
  TreeID INT PRIMARY KEY AUTO_INCREMENT,
  TreeName VARCHAR(255),
  TreeHeight DECIMAL(8, 2),
  TreeAge DECIMAL(8, 2),
  TreeCoordinates VARCHAR(255),
  TreeType VARCHAR(20),
  ImagePath VARCHAR(255)
  Invasive BOOLEAN
);




