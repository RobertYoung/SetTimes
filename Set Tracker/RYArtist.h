//
//  RYArtist.h
//  Set Tracker
//
//  Created by Robert Young on 27/11/2014.
//  Copyright (c) 2014 Robert Young. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface RYArtist : NSObject

@property (strong, nonatomic) NSString * name;
@property (strong, nonatomic) NSDate * startTime;
@property (strong, nonatomic) UIImage * profileImage;

-(id)initWithName:(NSString *)name withStartTime:(NSDate *)startTime withProfileImage:(UIImage *)profileImage;
-(NSString *) displayArtistInformation;

@end
