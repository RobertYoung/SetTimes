//
//  RYHelper.m
//  Set Tracker
//
//  Created by Robert Young on 19/08/2014.
//  Copyright (c) 2014 Robert Young. All rights reserved.
//

#import "RYHelper.h"

@implementation RYHelper

- (UIImage *)imageByCroppingImage:(UIImage *)image
{
    CGSize size;
    
    if (image.size.width > image.size.height)
    {
        size = CGSizeMake(image.size.height, image.size.height);
    }else{
        size = CGSizeMake(image.size.width, image.size.width);
    }
    
    double x = (image.size.width - size.width) / 2.0;
    double y = (image.size.height - size.height) / 2.0;
    
    CGRect cropRect = CGRectMake(x, y, size.height, size.width);
    CGImageRef imageRef = CGImageCreateWithImageInRect([image CGImage], cropRect);
    
    UIImage *cropped = [UIImage imageWithCGImage:imageRef];
    CGImageRelease(imageRef);
    
    return cropped;
}

@end
