//
//  SetTimesTableViewController.m
//  Set Tracker
//
//  Created by Robert Young on 17/08/2014.
//  Copyright (c) 2014 Robert Young. All rights reserved.
//

#import "SetTimesTableViewController.h"
#import "RYSetTimesTableViewCell.h"
#import "RYHelper.h"
#import "RYArtist.h"
#import "RYArtistProfileViewController.h"

@interface SetTimesTableViewController ()

@end

@implementation SetTimesTableViewController

#pragma mark Lazy Instantiations

-(NSMutableArray *)setTimes
{
    if (!_setTimes)
    {
        _setTimes = [[NSMutableArray alloc] init];
    }
    
    return _setTimes;
}

- (id)initWithStyle:(UITableViewStyle)style
{
    self = [super initWithStyle:style];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
    
    // Uncomment the following line to preserve selection between presentations.
    // self.clearsSelectionOnViewWillAppear = NO;
    
    // Uncomment the following line to display an Edit button in the navigation bar for this view controller.
    // self.navigationItem.rightBarButtonItem = self.editButtonItem;
    
    ////////////////////
    //BACKGROUND IMAGE//
    ////////////////////
    UIImage * backgroundImage = [UIImage imageNamed:@"disco_background.jpg"];
    
    // Blur filter
    CIImage * imageToBlur = [CIImage imageWithCGImage:backgroundImage.CGImage];
    CIFilter * gaussianBlurFilter = [CIFilter filterWithName:@"CIGaussianBlur"];
    [gaussianBlurFilter setValue:imageToBlur forKey:@"inputImage"];
    [gaussianBlurFilter setValue:[NSNumber numberWithFloat:15] forKey:@"inputRadius"];
    CIImage * resultImage = [gaussianBlurFilter valueForKey:@"outputImage"];
    
    // Create UIImage from filtered image
    UIImage * blurredImage = [[UIImage alloc] initWithCIImage:resultImage];
    
    // Create UIImageView and add to view
    UIImageView * backgroundImageView = [[UIImageView alloc] initWithImage:blurredImage];
    backgroundImageView.frame = CGRectMake(-100, -200, backgroundImageView.bounds.size.width, backgroundImageView.bounds.size.height); //-250, -250, 800, 1800
    [self.view insertSubview:backgroundImageView atIndex:0];
    
    /////////////////////////
    //NAVIGATION CONTROLLER//
    /////////////////////////
    // Create custom label for navigation controller
    UILabel * navigationLabel = [[UILabel alloc] initWithFrame:CGRectZero];
    
    navigationLabel.text = @"Set Times";
    navigationLabel.backgroundColor = [UIColor clearColor];
    navigationLabel.textColor = [UIColor whiteColor];
    navigationLabel.font = [UIFont fontWithName:@"Hero" size:20];
    self.navigationTitleLabel.titleView = navigationLabel;
    [navigationLabel sizeToFit];
    
    // Set navigation bar background colour
    self.navigationController.navigationBar.barTintColor = [UIColor blackColor];
    self.navigationController.navigationBar.translucent = NO;

    //////////////////
    //SET TIMES LIST//
    //////////////////
    RYArtist * hannahWants = [[RYArtist alloc] initWithName:@"Hannah Wants"
                                              withStartTime:[NSDate date]
                                           withProfileImage:[UIImage imageNamed:@"hannahwants.jpeg"]];
    
    RYArtist * shadowChild = [[RYArtist alloc] initWithName:@"Shadow Child"
                                              withStartTime:[NSDate date]
                                           withProfileImage:[UIImage imageNamed:@"shadowchild.jpg"]];
    
    RYArtist * mk =  [[RYArtist alloc] initWithName:@"Shadow Child"
                                      withStartTime:[NSDate date]
                                   withProfileImage:[UIImage imageNamed:@"mk.jpg"]];
    
    [self.setTimes addObject:hannahWants];
    [self.setTimes addObject:shadowChild];
    [self.setTimes addObject:mk];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

#pragma mark - Table view data source

- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView
{
    // Return the number of sections.
    return 1;
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section
{
    // Return the number of rows in the section.
    return self.setTimes.count;
}


- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    RYSetTimesTableViewCell *cell = (RYSetTimesTableViewCell*)[tableView dequeueReusableCellWithIdentifier:@"SetTimeCell"];
    
    if (!cell){
        // The custom cell
        NSArray * nib = [[NSBundle mainBundle] loadNibNamed:@"RYSetTimesTableViewCell" owner:self options:nil];
        
        // Set the cell to use the custom cell
        cell = [nib objectAtIndex:0];
    }
    
    // Configure the cell...
    RYArtist * artist = [self.setTimes objectAtIndex:indexPath.row];
    
    // Artist Name
    cell.artistNameLabel.text = [artist.name uppercaseString];
    cell.artistNameLabel.font = [UIFont fontWithName:@"Hero Light" size:20];
    cell.artistNameLabel.textColor = [UIColor whiteColor];
    
    // Start Time
    cell.startTimeLabel.text = @"9:00pm";
    cell.startTimeLabel.font = [UIFont fontWithName:@"Hero" size:15];
    
    // Artist Image
    CGFloat imagePositionY = (SET_TIMES_CELL_HEIGHT - 70) / 2;
    RYHelper * helper = [[RYHelper alloc] init];
    UIImageView * artistProfileImageView = [[UIImageView alloc] initWithFrame:CGRectMake(220, imagePositionY, 70, 70)];
    UIImage * artistProfileImage = [helper imageByCroppingImage: artist.profileImage];
    [artistProfileImageView setImage:artistProfileImage];
    artistProfileImageView.layer.cornerRadius = artistProfileImageView.frame.size.width / 2;
    artistProfileImageView.clipsToBounds = YES;
    [cell addSubview:artistProfileImageView];
    
    cell.selectionStyle = UITableViewCellSelectionStyleNone;
    
    return cell;
}

-(CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath
{
    return SET_TIMES_CELL_HEIGHT;
}

-(void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
    [self performSegueWithIdentifier:@"toArtistProfileController" sender:indexPath];
}
/*
// Override to support conditional editing of the table view.
- (BOOL)tableView:(UITableView *)tableView canEditRowAtIndexPath:(NSIndexPath *)indexPath
{
    // Return NO if you do not want the specified item to be editable.
    return YES;
}
*/

/*
// Override to support editing the table view.
- (void)tableView:(UITableView *)tableView commitEditingStyle:(UITableViewCellEditingStyle)editingStyle forRowAtIndexPath:(NSIndexPath *)indexPath
{
    if (editingStyle == UITableViewCellEditingStyleDelete) {
        // Delete the row from the data source
        [tableView deleteRowsAtIndexPaths:@[indexPath] withRowAnimation:UITableViewRowAnimationFade];
    } else if (editingStyle == UITableViewCellEditingStyleInsert) {
        // Create a new instance of the appropriate class, insert it into the array, and add a new row to the table view
    }   
}
*/

/*
// Override to support rearranging the table view.
- (void)tableView:(UITableView *)tableView moveRowAtIndexPath:(NSIndexPath *)fromIndexPath toIndexPath:(NSIndexPath *)toIndexPath
{
}
*/

/*
// Override to support conditional rearranging of the table view.
- (BOOL)tableView:(UITableView *)tableView canMoveRowAtIndexPath:(NSIndexPath *)indexPath
{
    // Return NO if you do not want the item to be re-orderable.
    return YES;
}
*/


#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender
{
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
    
    if ([[segue destinationViewController] isKindOfClass:[RYArtistProfileViewController class]]){
        RYArtistProfileViewController * artistProfileVC = [segue destinationViewController];
        
        NSIndexPath * indexPath = sender;

        [artistProfileVC setArtist:[self.setTimes objectAtIndex:indexPath.row]];
    }
}


@end
