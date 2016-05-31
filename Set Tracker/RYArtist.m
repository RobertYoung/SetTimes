//
//  RYArtist.m
//  Set Tracker
//
//  Created by Robert Young on 27/11/2014.
//  Copyright (c) 2014 Robert Young. All rights reserved.
//

#import "RYArtist.h"

@implementation RYArtist

-(id)initWithName:(NSString *)name withStartTime:(NSDate *)startTime withProfileImage:(UIImage *)profileImage{
    
    self.name = name;
    self.startTime = startTime;
    self.profileImage = profileImage;

    return self;
};

-(NSString *) displayArtistInformation
{
    return [NSString stringWithFormat:@"Name: %@, Start Time %@, Profile Image %@", self.name, self.startTime, self.profileImage];
}

@end
