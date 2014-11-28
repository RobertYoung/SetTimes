//
//  RYSetTimesTableViewCell.h
//  Set Tracker
//
//  Created by Robert Young on 18/08/2014.
//  Copyright (c) 2014 Robert Young. All rights reserved.
//

#import <UIKit/UIKit.h>

#define SET_TIMES_CELL_HEIGHT 85

@interface RYSetTimesTableViewCell : UITableViewCell

@property (strong, nonatomic) IBOutlet UILabel *artistNameLabel;
@property (strong, nonatomic) IBOutlet UILabel *startTimeLabel;

@end
