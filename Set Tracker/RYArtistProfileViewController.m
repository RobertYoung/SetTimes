//
//  RYArtistProfileViewController.m
//  Set Tracker
//
//  Created by Robert Young on 27/11/2014.
//  Copyright (c) 2014 Robert Young. All rights reserved.
//

#import "RYArtistProfileViewController.h"

@interface RYArtistProfileViewController ()

@end

@implementation RYArtistProfileViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.

    NSLog(@"%@", [self.artist displayArtistInformation]);
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
